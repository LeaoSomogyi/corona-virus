import { CountryInfo } from '@models/country-info.model';
import { KeyValue } from '@angular/common';
import { CountryTimelineData } from '@models/country-timeline-data.model';

export class CountryTimeline {
    countrytimelinedata: Array<CountryInfo>;
    timelineitems: Array<KeyValue<string, CountryTimelineData>>;
}