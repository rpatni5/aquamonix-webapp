import { dummyData } from '@/app/data/device-data';
import { DeviceDataService } from '@/app/services/station.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-system-status',
  imports: [CommonModule],
  templateUrl: './system-status.component.html',
  styleUrl: './system-status.component.scss'
})
export class SystemStatusComponent {
  deviceDetails: any
  sensorGroup: any
  constructor(private deviceDataService: DeviceDataService) { }

  sensorSections = [
    { key: 'Sense', label: 'Output Sense' },
    { key: 'Sys', label: 'System Sensors' },
    { key: 'Pump', label: 'Pumps' },
    { key: 'WaterUsage1', label: 'Water Usage' },
    { key: 'Weather', label: 'Weather' },
    { key: 'Moisture', label: 'Soil Moisture' },
    { key: 'Info', label: 'Information' }
  ];

  severityColors: { [key: string]: string } = {
    '0': 'black',
    '1': 'orange',
    '2': 'red'
  };

  ngOnInit() {
    this.init();
  }

  async init() {
    const resp = await this.deviceDataService.getDeviceData();
    this.deviceDetails = resp?.Devices?.Items?.["MPG101"]?.MetaData?.Device?.SensorGroups
    this.sensorGroup = resp?.Devices?.Items?.["MPG101"]?.SensorGroups
    this.renderVisibleItems(this.sensorGroup, this.deviceDetails,);
  }

  objectKeys = Object.keys;

  getVisibleItemsBySection(sectionKey: string): any[] {
    const sectionData = this.sensorGroup?.Items?.[sectionKey]?.Items;
    const metaData = this.deviceDetails?.[sectionKey]?.Items;

    if (!sectionData || typeof sectionData !== 'object') return [];

    return Object.keys(sectionData)
      .map((itemKey) => {
        const sensorItem = sectionData[itemKey]?.Values?.Items?.["1"];
        const meta = metaData?.[itemKey]?.Values?.Items?.["1"] || {};

        if (
          sensorItem?.Visible === 'true' &&
          sensorItem?.Value !== undefined &&
          sensorItem?.Value !== null &&
          sensorItem?.Value !== ''
        ) {
          return {
            name: meta?.Name || itemKey,
            value: sensorItem?.Value,
            severity: sensorItem?.Severity ?? '0',
            units: meta?.Units || '',
          };
        }
        return null;
      })
      .filter((item) => item !== null);
  }


  renderVisibleItems(data: any, metadata: any): any[] {
    const visibleItems: any[] = [];
    console.log("metadata", metadata)
    console.log("data", data)

    if (!data || typeof data !== 'object') return visibleItems;

    Object.keys(data).forEach((key) => {
      const sensor = data[key];
      console.log("sensor", sensor)
      const sensorItems = sensor?.Values?.Items;

      if (!sensorItems) return;

      const filtered = Object.keys(sensorItems)
        .filter(
          (itemKey) =>
            sensorItems[itemKey].Visible === 'true' &&
            sensorItems[itemKey].Value !== undefined &&
            sensorItems[itemKey].Value !== null
        )
        .map((itemKey) => {
          const value = sensorItems[itemKey];
          const meta =
            metadata?.Items?.[key]?.Values?.Items?.[itemKey] || {};

          return {
            name: meta.Name || key,
            value: value.Value,
            severity: value.Severity ?? '0',
            units: meta.Units || '',
          };
        });

      visibleItems.push(...filtered);
    });

    return visibleItems;
  }

}