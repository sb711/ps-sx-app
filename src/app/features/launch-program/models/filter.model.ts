export class Filter {
    constructor(
        public launch_year: number = null,
        public launch_success: boolean = null,
        public land_success: boolean = null
    ) { }

    setFilter(name: any, value: any) {
        this[name] = value;
    }

    getFilter(name: any) {
        return this[name];
    }
}