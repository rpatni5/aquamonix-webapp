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
                                '1': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 1 Description' },
                                '2': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 2 Description' },
                                '3': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 3 Description' },
                                '4': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 4 Description' },
                                '5': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 5 Description' },
                                '6': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 6 Description' },
                                '7': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 7 Description' },
                                '8': { Valves: { Items: {} }, ExpectedFlow: '70', Name: 'Station 8 Description' },
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
                                '10': { Type: 'MPG.Grouping', Name: 'Program 10' },
                                '11': { Type: 'MPG.Grouping', Name: 'Program 11' },
                                '12': { Type: 'MPG.Grouping', Name: 'Program 12' },
                                '13': { Type: 'MPG.Grouping', Name: 'Program 13' },
                                '14': { Type: 'MPG.Grouping', Name: 'Program 14' },
                                '15': { Type: 'MPG.Grouping', Name: 'Program 15' },
                                '16': { Type: 'MPG.Looping', Name: 'Looping Program' },
                                '17': { Type: 'MPG.Frost', Name: 'Frost Protection Program' },
                                '18': { Type: 'MPG.Heat', Name: 'Heat Protection Program' },
                                '19': { Type: 'MPG.Fertigation', Name: 'Fertigation Program' },
                                '20': { Type: 'MPG.Filter', Name: 'Filter Flush Program' },
                                '21': { Type: 'MPG.Current', Name: 'Current Profile Program' },
                                '22': { Type: 'MPG.Fill', Name: 'Pond Fill Program' }
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
                        SensorGroups: {},
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
                SensorGroups: {},
                Badges: {},
                IsUpdatingStatus: false,
                Status: {},
                SubTexts: {},
            },
        },
    },
    Alerts: DUMMY_ALERTS,
};
