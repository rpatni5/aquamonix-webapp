export interface DeviceData {
    Devices: {
        Items: {
            [deviceId: string]: ReticDevice;
        };
    };
    Alerts: any;
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
    SensorGroups: object;
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
