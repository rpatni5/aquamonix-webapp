export interface UnsavedChanges {
    hasChanges(): boolean;
    saveStartTimes(): void;
    markChangesSaved?(): void;
  }
  