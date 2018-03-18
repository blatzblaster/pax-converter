export declare class SoloClass {
    abbreviation: string;
    name: string;
    modifiers: SoloModifier[];
}
export declare class SoloClassSeason {
    abbreviation: string;
    name: string;
    year: number;
    modifier: number;
}
export declare class SoloModifier {
    year: number;
    modifier: number;
}
export declare class Library {
    private allClasses;
    constructor();
    calculatePaxTime(rawTime: number, modifier: number): number;
    calculateTimeToBeat(rawTime: number, modifier: number, comparisonModifier: number): number;
    getClassesForSeason(year: number): SoloClassSeason[];
    private _initializeData();
}
