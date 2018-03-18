/* Container class for raw class data */
export class SoloClass {
    abbreviation: string;
    name: string;
    modifiers: SoloModifier[];
}

/* Container class for single season class data */
export class SoloClassSeason {
    abbreviation: string;
    name: string;
    year: number;
    modifier: number;
}

/* Container class for the modifier for a particular year */
export class SoloModifier {
    year: number;
    modifier: number;
}

/* Data and methods for calculation of SCCA solo PAX times */
export class Library {
    private allClasses: SoloClass[];

    constructor(){
        this._initializeData();
    }

    /* Calculate the pax time given a raw time and modifier */
    calculatePaxTime(rawTime: number, modifier: number): number {
        return rawTime * modifier;
    }

    /* Calculate the raw time that a drive with a different modifier must beat
     * to have a better pax time than a given raw time and modifier */
    calculateTimeToBeat(rawTime: number, modifier: number, comparisonModifier: number): number {
        return (rawTime * modifier) / comparisonModifier;
    }

    /* Return a flattened list of class modifier data for a given year */
    getClassesForSeason(year: number): SoloClassSeason[] {
        var filteredList: SoloClass[] = this.allClasses.filter(soloClass => {
            soloClass.modifiers.findIndex(modifier => modifier.year === year) >= 0;
        });

        return filteredList.map(soloClass => {
            return {
                abbreviation: soloClass.abbreviation,
                name: soloClass.name,
                year: year,
                modifier: soloClass.modifiers[soloClass.modifiers.findIndex(modifier => modifier.year === year)].modifier
            };
        })
    }

    /* Initialize the data container for the raw class/season information */
    private _initializeData() {
        this.allClasses = [
            { abbreviation: "SS", name: "Super Street", modifiers: [ { year: 2016, modifier: 0.835}, { year: 2017, modifier: 0.826}, { year: 2018, modifier: 0.817}] },
            { abbreviation: "AS", name: "A Street", modifiers: [ { year: 2016, modifier: 0.833}, { year: 2017, modifier: 0.819}, { year: 2018, modifier: 0.814}] },
            { abbreviation: "BS", name: "B Street", modifiers: [ { year: 2016, modifier: 0.826}, { year: 2017, modifier: 0.813}, { year: 2018, modifier: 0.808}] },
            { abbreviation: "CS", name: "C Street", modifiers: [ { year: 2016, modifier: 0.819}, { year: 2017, modifier: 0.810}, { year: 2018, modifier: 0.805}] },
            { abbreviation: "DS", name: "D Street", modifiers: [ { year: 2016, modifier: 0.811}, { year: 2017, modifier: 0.801}, { year: 2018, modifier: 0.794}] },
            { abbreviation: "ES", name: "E Street", modifiers: [ { year: 2016, modifier: 0.807}, { year: 2017, modifier: 0.794}, { year: 2018, modifier: 0.787}] },
            { abbreviation: "FS", name: "F Street", modifiers: [ { year: 2016, modifier: 0.814}, { year: 2017, modifier: 0.804}, { year: 2018, modifier: 0.797}] },
            { abbreviation: "GS", name: "G Street", modifiers: [ { year: 2016, modifier: 0.806}, { year: 2017, modifier: 0.793}, { year: 2018, modifier: 0.786}] },
            { abbreviation: "HS", name: "H Street", modifiers: [ { year: 2016, modifier: 0.798}, { year: 2017, modifier: 0.786}, { year: 2018, modifier: 0.781}] },
            { abbreviation: "HCS", name: "Heritage Classic Street", modifiers: [ { year: 2016, modifier: 0.817}, { year: 2017, modifier: 0.809}, { year: 2018, modifier: 0.791}] },
            { abbreviation: "SSC", name: "Solo Spec Coupe", modifiers: [ { year: 2018, modifier: 0.806}] },
            { abbreviation: "STF", name: "Stret Touring FWD", modifiers: [ { year: 2016, modifier: 0.809}, { year: 2017, modifier: 0.800}] },
            { abbreviation: "STS", name: "Street Touring Sport", modifiers: [ { year: 2016, modifier: 0.832}, { year: 2017, modifier: 0.818}, { year: 2018, modifier: 0.810}] },
            { abbreviation: "STX", name: "Street Touring Xtreme", modifiers: [ { year: 2016, modifier: 0.836}, { year: 2017, modifier: 0.822}, { year: 2018, modifier: 0.813}] },
            { abbreviation: "STR", name: "Street Touring Roadster", modifiers: [ { year: 2016, modifier: 0.841}, { year: 2017, modifier: 0.830}, { year: 2018, modifier: 0.823}] },
            { abbreviation: "STU", name: "Street Touring Ultra", modifiers: [ { year: 2016, modifier: 0.845}, { year: 2017, modifier: 0.831}, { year: 2018, modifier: 0.824}] },
            { abbreviation: "STP", name: "Street Touring Pony", modifiers: [ { year: 2016, modifier: 0.837}, { year: 2017, modifier: 0.820}, { year: 2018, modifier: 0.815}] },
            { abbreviation: "STH", name: "Street Touring Hot Hatch", modifiers: [ { year: 2018, modifier: 0.811}] },
            { abbreviation: "SSP", name: "Super Street Prepared", modifiers: [ { year: 2016, modifier: 0.872}, { year: 2017, modifier: 0.862}, { year: 2018, modifier: 0.852}] },
            { abbreviation: "ASP", name: "A Street Prepared", modifiers: [ { year: 2016, modifier: 0.865}, { year: 2017, modifier: 0.856}, { year: 2018, modifier: 0.848}] },
            { abbreviation: "BSP", name: "B Street Prepared", modifiers: [ { year: 2016, modifier: 0.863}, { year: 2017, modifier: 0.853}, { year: 2018, modifier: 0.846}] },
            { abbreviation: "CSP", name: "C Street Prepared", modifiers: [ { year: 2016, modifier: 0.867}, { year: 2017, modifier: 0.860}, { year: 2018, modifier: 0.857}] },
            { abbreviation: "DSP", name: "D Street Prepared", modifiers: [ { year: 2016, modifier: 0.855}, { year: 2017, modifier: 0.842}, { year: 2018, modifier: 0.835}] },
            { abbreviation: "ESP", name: "E Street Prepared", modifiers: [ { year: 2016, modifier: 0.852}, { year: 2017, modifier: 0.837}, { year: 2018, modifier: 0.828}] },
            { abbreviation: "FSP", name: "F Street Prepared", modifiers: [ { year: 2016, modifier: 0.840}, { year: 2017, modifier: 0.829}, { year: 2018, modifier: 0.819}] },
            { abbreviation: "SSR", name: "Super Street R", modifiers: [ { year: 2016, modifier: 0.860}, { year: 2017, modifier: 0.847}, { year: 2018, modifier: 0.838}] },
            { abbreviation: "CAM-C", name: "Classic American Muscle Contemporary", modifiers: [ { year: 2016, modifier: 0.839}, { year: 2017, modifier: 0.823}, { year: 2018, modifier: 0.816}] },
            { abbreviation: "CAM-T", name: "Classic American Muscle Traditional", modifiers: [ { year: 2016, modifier: 0.834}, { year: 2017, modifier: 0.817}, { year: 2018, modifier: 0.807}] },
            { abbreviation: "CAM-S", name: "Classic American Muscle Sports", modifiers: [ { year: 2016, modifier: 0.848}, { year: 2017, modifier: 0.838}, { year: 2018, modifier: 0.831}] },
            { abbreviation: "XP", name: "X Prepared", modifiers: [ { year: 2016, modifier: 0.907}, { year: 2017, modifier: 0.892}, { year: 2018, modifier: 0.884}] },
            { abbreviation: "BP", name: "B Prepared", modifiers: [ { year: 2016, modifier: 0.883}, { year: 2017, modifier: 0.869}, { year: 2018, modifier: 0.860}] },
            { abbreviation: "CP", name: "C Prepared", modifiers: [ { year: 2016, modifier: 0.864}, { year: 2017, modifier: 0.854}, { year: 2018, modifier: 0.847}] },
            { abbreviation: "DP", name: "D Prepared", modifiers: [ { year: 2016, modifier: 0.879}, { year: 2017, modifier: 0.865}, { year: 2018, modifier: 0.858}] },
            { abbreviation: "EP", name: "E Prepared", modifiers: [ { year: 2016, modifier: 0.871}, { year: 2017, modifier: 0.859}, { year: 2018, modifier: 0.850}] },
            { abbreviation: "FP", name: "F Prepared", modifiers: [ { year: 2016, modifier: 0.880}, { year: 2017, modifier: 0.873}, { year: 2018, modifier: 0.863}] },
            { abbreviation: "HCR", name: "Heritage Classic Race", modifiers: [ { year: 2016, modifier: 0.838}, { year: 2017, modifier: 0.825}, { year: 2018, modifier: 0.812}] },
            { abbreviation: "SMF", name: "Street Modified FWD", modifiers: [ { year: 2016, modifier: 0.861}, { year: 2017, modifier: 0.848}, { year: 2018, modifier: 0.839}] },
            { abbreviation: "SM", name: "Street Modified", modifiers: [ { year: 2016, modifier: 0.870}, { year: 2017, modifier: 0.861}, { year: 2018, modifier: 0.853}] },
            { abbreviation: "SSM", name: "Super Street Modified", modifiers: [ { year: 2016, modifier: 0.882}, { year: 2017, modifier: 0.875}, { year: 2018, modifier: 0.871}] },
            { abbreviation: "AM", name: "A Modified", modifiers: [ { year: 2016, modifier: 1.000}, { year: 2017, modifier: 1.000}, { year: 2018, modifier: 1.000}] },
            { abbreviation: "BM", name: "B Modified", modifiers: [ { year: 2016, modifier: 0.966}, { year: 2017, modifier: 0.956}, { year: 2018, modifier: 0.956}] },
            { abbreviation: "CM", name: "C Modified", modifiers: [ { year: 2016, modifier: 0.916}, { year: 2017, modifier: 0.901}, { year: 2018, modifier: 0.890}] },
            { abbreviation: "DM", name: "D Modified", modifiers: [ { year: 2016, modifier: 0.919}, { year: 2017, modifier: 0.906}, { year: 2018, modifier: 0.895}] },
            { abbreviation: "EM", name: "E Modified", modifiers: [ { year: 2016, modifier: 0.920}, { year: 2017, modifier: 0.905}, { year: 2018, modifier: 0.894}] },
            { abbreviation: "FM", name: "F Modified", modifiers: [ { year: 2016, modifier: 0.926}, { year: 2017, modifier: 0.916}, { year: 2018, modifier: 0.904}] },
            { abbreviation: "FSAE", name: "Formula SAE", modifiers: [ { year: 2016, modifier: 0.982}, { year: 2017, modifier: 0.966}, { year: 2018, modifier: 0.958}] },
            { abbreviation: "KM", name: "Kart Modified", modifiers: [ { year: 2016, modifier: 0.954}, { year: 2017, modifier: 0.939}, { year: 2018, modifier: 0.928}] },
            { abbreviation: "JA", name: "Junior A", modifiers: [ { year: 2016, modifier: 0.878}, { year: 2017, modifier: 0.864}, { year: 2018, modifier: 0.855}] },
            { abbreviation: "JB", name: "Junior B", modifiers: [ { year: 2016, modifier: 0.842}, { year: 2017, modifier: 0.834}, { year: 2018, modifier: 0.825}] },
            { abbreviation: "JC", name: "Junior C", modifiers: [ { year: 2016, modifier: 0.734}, { year: 2017, modifier: 0.726}, { year: 2018, modifier: 0.718}] }
          ];
    }
}