import { DeviceData } from "../models/device-data.model";
import { DUMMY_ALERTS } from "./alerts";

export const dummyData: DeviceData = {
    Devices: {
        Items: {
            MPG101: {
                $type: 'RS.E.ReticDevice, RemoteScada',
                Stations: {
                    Summary: {
                        Texts: {
                            Items: {
                                '1': {
                                    Value: 'None active'
                                }
                            }
                        },
                        BriefTexts: {}
                    },
                    Items: {
                        '1': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '2': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '3': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '4': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '5': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '6': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '7': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '8': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '9': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '10': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '11': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '12': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '13': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '14': { Status: { Value: 'Stopped', Visible: 'true' } },
                        '15': { Status: { Value: 'Stopped', Visible: 'true' } }
                    }
                },
                Programs: {
                    Summary: {
                        Texts: {
                            Items: {
                                '1': {
                                    Value: 'No irrigation programs running'
                                }
                            }
                        }
                    },
                    Items: {
                        "1": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "03:00"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: false,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: false,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: false,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "06:08"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                true,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "2": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "3": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "4": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "5": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "6": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "7": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "8": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "9": {
                            SetToRun: false,
                            StartConditions: {
                                Items: {
                                    "1": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "2": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "3": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "4": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    },
                                    "5": {
                                        Type: "Time",
                                        Enabled: true,
                                        StartTimeInMinutes: "0"
                                    }
                                }
                            },
                            Pumps: {},
                            StationGroups: {
                                Items: {
                                    "1": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "2": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "3": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "4": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "5": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "6": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "7": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "8": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "9": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "10": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "11": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "12": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "13": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "14": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "15": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "16": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "17": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "18": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "19": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    },
                                    "20": {
                                        Stations: {},
                                        RuntTimeMinutes: 0
                                    }
                                }
                            },
                            ScaleFactor: {
                                Value: "0",
                                Visible: "true"
                            },
                            DayTable: [
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false,
                                false
                            ],
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },

                    }
                },
                Pumps: {
                    Items: {
                        "1": {
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        },
                        "2": {
                            Status: {
                                Value: "Stopped",
                                Visible: "true"
                            }
                        }
                    }
                },
                MetaData: {
                    Device: {
                        $type: 'RS.E.ReticDevice, RemoteScada',
                        Stations: {
                            Items: {
                                '1': { Valves: { Items: {} }, ExpectedFlow: '50', Name: 'Station 1 Description' },
                                '2': { Valves: { Items: {} }, ExpectedFlow: '30', Name: 'Station 2 Description' },
                                '3': { Valves: { Items: {} }, ExpectedFlow: '80', Name: 'Station 3 Description' },
                                '4': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 4 Description' },
                                '5': { Valves: { Items: {} }, ExpectedFlow: '20', Name: 'Station 5 Description' },
                                '6': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 6 Description' },
                                '7': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 7 Description' },
                                '8': { Valves: { Items: {} }, ExpectedFlow: '60', Name: 'Station 8 Description' },
                                '9': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 9 Description' },
                                '10': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 10 Description' },
                                '11': { Valves: { Items: {} }, ExpectedFlow: '69.9000015258789', Name: 'Station 11 Description' },
                                '12': { Valves: { Items: {} }, ExpectedFlow: '0', Name: 'Station 12 Description' },
                                '13': { Valves: { Items: {} }, ExpectedFlow: '0', Name: 'Station 13 Description' },
                                '14': { Valves: { Items: {} }, ExpectedFlow: '0', Name: 'Station 14 Description' },
                                '15': { Valves: { Items: {} }, ExpectedFlow: '0', Name: 'Station 15 Description' }
                            }
                        },
                        Programs: {
                            Items: {
                                '1': { Type: 'MPG.Grouping', Name: 'Program 1' },
                                '2': { Type: 'MPG.Grouping', Name: 'Program 2' },
                                '3': { Type: 'MPG.Grouping', Name: 'Program 3' },
                                '4': { Type: 'MPG.Grouping', Name: 'Program 4' },
                                '5': { Type: 'MPG.Grouping', Name: 'Program 5' },
                                '6': { Type: 'MPG.Grouping', Name: 'Program 6' },
                                '7': { Type: 'MPG.Grouping', Name: 'Program 7' },
                                '8': { Type: 'MPG.Grouping', Name: 'Program 8' },
                                '9': { Type: 'MPG.Grouping', Name: 'Program 9' },
                                // '10': { Type: 'MPG.Grouping', Name: 'Program 10' },
                                // '11': { Type: 'MPG.Grouping', Name: 'Program 11' },
                                // '12': { Type: 'MPG.Grouping', Name: 'Program 12' },
                                // '13': { Type: 'MPG.Grouping', Name: 'Program 13' },
                                // '14': { Type: 'MPG.Grouping', Name: 'Program 14' },
                                // '15': { Type: 'MPG.Grouping', Name: 'Program 15' },
                                // '16': { Type: 'MPG.Looping', Name: 'Looping Program' },
                                // '17': { Type: 'MPG.Frost', Name: 'Frost Protection Program' },
                                // '18': { Type: 'MPG.Heat', Name: 'Heat Protection Program' },
                                // '19': { Type: 'MPG.Fertigation', Name: 'Fertigation Program' },
                                // '20': { Type: 'MPG.Filter', Name: 'Filter Flush Program' },
                                // '21': { Type: 'MPG.Current', Name: 'Current Profile Program' },
                                // '22': { Type: 'MPG.Fill', Name: 'Pond Fill Program' }
                            }
                        },
                        Pumps: {
                            Items: {
                                "1": {
                                    Type: "Pump",
                                    Mode: "Manual",
                                    Name: "Pump 1"
                                },
                                "2": {
                                    Type: "Pump",
                                    Mode: "Manual",
                                    Name: "Pump 2"
                                }
                            }
                        },
                        Number: '101',
                        Features: {},
                        Type: 'MPG',
                        Location: {},
                        Settings: {},
                        SensorGroups: {
                            Items: {
                                Sense: {
                                    Name: "Output Sense",
                                    Items: {
                                        MPG101_SENSE: {
                                            Values: {
                                                Items: {
                                                    "1": {
                                                        Units: "mA",
                                                        Type: "Number",
                                                        DecimalPlaces: "0",
                                                        Name: "Local Sense"
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_TWIN_CURRENT_1: {
                                            Values: {
                                                Items: {
                                                    "1": {
                                                        Units: "mA",
                                                        Type: "Number",
                                                        DecimalPlaces: "0",
                                                        Name: "Module 1 Sense"
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_TWIN_CURRENT_2: {
                                            Values: {
                                                Items: {
                                                    "1": {
                                                        Units: "mA",
                                                        Type: "Number",
                                                        DecimalPlaces: "0",
                                                        Name: "Module 2 Sense"
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_TWIN_CURRENT_3: {
                                            Values: {
                                                Items: {
                                                    1: {
                                                        Units: "mA",
                                                        Type: "Number",
                                                        DecimalPlaces: "0",
                                                        Name: "Module 3 Sense"
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_TWIN_CURRENT_4: {
                                            Values: {
                                                Items: {
                                                    "1": {
                                                        Units: "mA",
                                                        Type: "Number",
                                                        DecimalPlaces: "0",
                                                        Name: "Module 4 Sense"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Sys: {
                                    Name: 'System Sensors',
                                    Items: {
                                        MPG101_PRESSURE: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'kPa',
                                                        Type: 'Number',
                                                        DecimalPlaces: '2',
                                                        Name: 'Pressure 1'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PRESSURE_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'kPa',
                                                        Type: 'Number',
                                                        DecimalPlaces: '2',
                                                        Name: 'Pressure 2'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_FLOW: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'L/s',
                                                        Type: 'Number',
                                                        DecimalPlaces: '3',
                                                        Name: 'Flow 1'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_FLOW_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'L/s',
                                                        Type: 'Number',
                                                        DecimalPlaces: '3',
                                                        Name: 'Flow 2'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_FERT_FLOW: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'L/s',
                                                        Type: 'Number',
                                                        DecimalPlaces: '3',
                                                        Name: 'Fert Flow'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_LEVEL: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Level 1'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_LEVEL_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Level 2'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_TEMPERATURE: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'C',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Temperature'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Pump: {
                                    Name: 'Pumps',
                                    Items: {
                                        MPG101_PUMP_CURRENT_1: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'A',
                                                        Type: 'Number',
                                                        DecimalPlaces: '1',
                                                        Name: 'Pump 1 Current'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_CURRENT_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'A',
                                                        Type: 'Number',
                                                        DecimalPlaces: '1',
                                                        Name: 'Pump 2 Current'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_CURRENT_3: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'A',
                                                        Type: 'Number',
                                                        DecimalPlaces: '1',
                                                        Name: 'Pump 3 Current'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_CURRENT_4: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'A',
                                                        Type: 'Number',
                                                        DecimalPlaces: '1',
                                                        Name: 'Pump 4 Current'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_CURRENT_5: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'A',
                                                        Type: 'Number',
                                                        DecimalPlaces: '1',
                                                        Name: 'Pump 5 Current'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_FAULT_1: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Pump 1 Fault'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_FAULT_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Pump 2 Fault'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_FAULT_3: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Pump 3 Fault'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_FAULT_4: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Pump 4 Fault'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PUMP_FAULT_5: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Pump 5 Fault'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                WaterUsage1: {
                                    Name: 'Water Usage',
                                    Items: {
                                        MPG101_VOL_1_MONTH_TOTAL: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'kL',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Month Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_VOL_1_MONTH_PERCENT: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: '%',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Month %'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_VOL_1_YEAR_TOTAL: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'kL',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Year Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_VOL_1_YEAR_PERCENT: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: '%',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Year %'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Weather: {
                                    Name: 'Weather',
                                    Items: {
                                        MPG101_W_PREV_ET: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'ET Yesterday'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_W_PREV_R: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Rain Yesterday'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_W_ET: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'ET Today'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_W_R: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Rain Today '
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Moisture: {
                                    Name: 'Soil Moisture',
                                    Items: {
                                        MPG101_MOISTURE: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: '%',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Moisture 1'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_MOISTURE_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: '%',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Moisture 2'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PROBE_1: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Probe 1 Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PROBE_2: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Probe 2 Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PROBE_3: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Probe 3 Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PROBE_4: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Probe 4 Total'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_PROBE_5: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Units: 'mm',
                                                        Type: 'Number',
                                                        DecimalPlaces: '0',
                                                        Name: 'Probe 5 Total'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Info: {
                                    Name: 'Information',
                                    Items: {
                                        MPG101_MODEL: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Model'
                                                    }
                                                }
                                            }
                                        },
                                        MPG101_VERSION: {
                                            Values: {
                                                Items: {
                                                    '1': {
                                                        Type: 'String',
                                                        Name: 'Firmware'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Name: 'MPG',
                    },
                    TimeStamp: '1753687010',
                },
                Settings: {
                    Items: {
                        ProgramDisable: {
                            Values: {
                                Items: {
                                    ProgramDisable: {
                                        Value: "1",
                                        Visible: "true"
                                    }
                                }
                            }
                        }
                    }
                },
                SensorGroups: {
                    Items: {
                        Info: {
                            Items: {
                                MPG101_MODEL: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_VERSION: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "v250128",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Moisture: {
                            Items: {
                                MPG101_MOISTURE: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_MOISTURE_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Pump: {
                            Items: {
                                MPG101_PUMP_CURRENT_1: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PUMP_CURRENT_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PUMP_CURRENT_3: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PUMP_CURRENT_4: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PUMP_CURRENT_5: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Sense: {
                            Items: {
                                MPG101_SENSE: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "0",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_TWIN_CURRENT_1: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "0",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_TWIN_CURRENT_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "-1",
                                                Visible: "false"
                                            }
                                        }
                                    }
                                },
                                MPG101_TWIN_CURRENT_3: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_TWIN_CURRENT_4: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Sys: {
                            Items: {
                                MPG101_FERT_FLOW: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_FLOW: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_FLOW_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_LEVEL: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_LEVEL_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PRESSURE: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_PRESSURE_2: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_TEMPERATURE: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        WaterUsage1: {
                            Items: {
                                MPG101_VOL_1_MONTH_PERCENT: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Severity: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_VOL_1_MONTH_TOTAL: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "0",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_VOL_1_YEAR_PERCENT: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "",
                                                Severity: "",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                },
                                MPG101_VOL_1_YEAR_TOTAL: {
                                    Values: {
                                        Items: {
                                            "1": {
                                                Value: "106509",
                                                Visible: "true"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                Badges: {},
                IsUpdatingStatus: false,
                Status: {},
                SubTexts: {},
            },
        },
    },
    Alerts: {
        Items: {
            "17": {
                DateTimeUtc: "1722518744",
                DeviceId: "MPG101",
                Description: "New Firmware Loaded",
                Severity: "5",
                Active: false,
                Category: "0"
            },
            "18": {
                DateTimeUtc: "1752818768",
                DeviceId: "MPG101",
                Description: "Rain Switch On",
                Severity: "1",
                Active: true,
                Category: "0"
            },
            "19": {
                DateTimeUtc: "1752818768",
                DeviceId: "MPG101",
                Description: "Controller Powered On",
                Severity: "0",
                Active: false,
                Category: "0"
            },
            "20": {
                DateTimeUtc: "1752818769",
                DeviceId: "MPG101",
                Description: "Door Open",
                Severity: "3",
                Active: true,
                Category: "0"
            },
            "21": {
                DateTimeUtc: "1752818868",
                DeviceId: "MPG101",
                Description: "TWIN / Module 2 Comms Error",
                Severity: "4",
                Active: false,
                Category: "0"
            },
            "22": {
                DateTimeUtc: "1752822000",
                DeviceId: "MPG101",
                Description: "Program 15 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "23": {
                DateTimeUtc: "1753167600",
                DeviceId: "MPG101",
                Description: "Program 15 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "26": {
                DateTimeUtc: "1753207200",
                DeviceId: "MPG101",
                Description: "Program 9 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "27": {
                DateTimeUtc: "1753228800",
                DeviceId: "MPG101",
                Description: "Program 8 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "28": {
                DateTimeUtc: "1753232400",
                DeviceId: "MPG101",
                Description: "Program 9 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "29": {
                DateTimeUtc: "1753234500",
                DeviceId: "MPG101",
                Description: "Program 16 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "30": {
                DateTimeUtc: "1753243200",
                DeviceId: "MPG101",
                Description: "Program 12 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "31": {
                DateTimeUtc: "1753286400",
                DeviceId: "MPG101",
                Description: "Program 1 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "32": {
                DateTimeUtc: "1753286400",
                DeviceId: "MPG101",
                Description: "Program 15 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "33": {
                DateTimeUtc: "1753297200",
                DeviceId: "MPG101",
                Description: "Program 1 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "34": {
                DateTimeUtc: "1753297200",
                DeviceId: "MPG101",
                Description: "Program 10 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "35": {
                DateTimeUtc: "1753300800",
                DeviceId: "MPG101",
                Description: "Program 11 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "36": {
                DateTimeUtc: "1753304400",
                DeviceId: "MPG101",
                Description: "Program 10 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "37": {
                DateTimeUtc: "1753304400",
                DeviceId: "MPG101",
                Description: "Program 11 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "38": {
                DateTimeUtc: "1753320900",
                DeviceId: "MPG101",
                Description: "Program 16 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "39": {
                DateTimeUtc: "1753340400",
                DeviceId: "MPG101",
                Description: "Program 15 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
            "40": {
                DateTimeUtc: "1753380000",
                DeviceId: "MPG101",
                Description: "Program 9 Not Started (Rainswitch)",
                Severity: "0",
                Active: true,
                Category: "0"
            },
        },
    },
};
