import { AlertItem } from "../models/alert.model";

export const DUMMY_ALERTS: { [key: string]: AlertItem } = {
  '17': {
    DateTimeUtc: 1752818750,
    DeviceId: 'MPG101',
    Description: 'New Firmware Loaded',
    Severity: '0',
    Active: false,
    Category: '0'
  },
  '18': {
    DateTimeUtc: 1752818768,
    DeviceId: 'MPG101',
    Description: 'Rain Switch On',
    Severity: '0',
    Active: false,
    Category: '0'
  },
  '22': {
    DateTimeUtc: 1752822000,
    DeviceId: 'MPG101',
    Description: 'Program 15 Not Started (Rainswitch)',
    Severity: '0',
    Active: true,
    Category: '0'
  },
  '23': {
    DateTimeUtc: 1753167600,
    DeviceId: 'MPG101',
    Description: 'Program 15 Not Started (Rainswitch)',
    Severity: '0',
    Active: true,
    Category: '0'
  }
};
