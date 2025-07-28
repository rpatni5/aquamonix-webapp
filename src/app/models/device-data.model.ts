export interface DeviceData {
    Devices: {
        Items: {
            [deviceId: string]: ReticDevice;
        };
    };
    Alerts: {
        Items: {
            [alertId: string]: AlertItem;
        };
    }
}

export interface ReticDevice {
    $type: string;
    Stations: {
        Summary: StationSummary;
        Items: {
            [stationId: string]: StationStatus;
        };
    };
    Programs: {
        Summary: {
            Texts: {
                Items: {
                    [id: string]: {
                        Value: string;
                    };
                };
            };
        };
        Items: {
            [programId: string]: Program;
        };
    };
    Pumps: {
        Items: {
            [pumpId: string]: PumpStatus;
        };
    };
    MetaData: {
        Device: {
            $type: string;
            Stations: {
                Items: {
                    [stationId: string]: MetaStation;
                };
            };
            Programs: {
                Items: {
                    [programId: string]: {
                        Type: string;
                        Name: string;
                    };
                };
            };
            Pumps: {
                Items: {
                    [pumpId: string]: {
                        Type: string;
                        Mode: string;
                        Name: string;
                    };
                };
            };
            Number: string;
            Features: object;
            Type: string;
            Location: object;
            Settings: object;
            SensorGroups: object;
            Name: string;
        };
        TimeStamp: string;
    };
    Settings: {
        Items: {
            ProgramDisable: {
                Values: {
                    Items: {
                        ProgramDisable: {
                            Value: string;
                            Visible: string;
                        };
                    };
                };
            };
        };
    };
    SensorGroups: SensorGroups;
    Badges: object;
    IsUpdatingStatus: boolean;
    Status: object;
    SubTexts: object;
}

export interface StationSummary {
    Texts: {
        Items: {
            [id: string]: {
                Value: string;
            };
        };
    };
    BriefTexts: object;
}

export interface StationStatus {
    Status: {
        Value: string;
        Visible: string;
    };
}

export interface PumpStatus {
    Status: {
        Value: string;
        Visible: string;
    };
}

export interface MetaStation {
    Valves: {
        Items: object;
    };
    ExpectedFlow: string;
    Name: string;
}

export interface Program {
    SetToRun: boolean;
    StartConditions: {
        Items: {
            [id: string]: {
                Type: string;
                Enabled: boolean;
                StartTimeInMinutes: string;
            };
        };
    };
    Pumps: object;
    StationGroups: {
        Items: {
            [groupId: string]: {
                Stations: object;
                RuntTimeMinutes: number;
            };
        };
    };
    ScaleFactor: {
        Value: string;
        Visible: string;
    };
    DayTable: boolean[];
    Status: {
        Value: string;
        Visible: string;
    };
}

export interface AlertItem {
    DateTimeUtc: string;
    DeviceId: string;
    Description: string;
    Severity: string;
    Active: boolean;
    Category: string;
}

export interface SensorValueItem {
    Value: string;
    Visible: string;
    Severity?: string;
}

export interface SensorValues {
    Items: {
        [id: string]: SensorValueItem;
    };
}
export interface SensorItem {
    Values: SensorValues;
}
export interface SensorGroupItems {
    [sensorId: string]: SensorItem;
}
export interface SensorGroup {
    Items: SensorGroupItems;
}
export interface SensorGroups {
    Items: {
        [groupName: string]: SensorGroup;
    };
}

