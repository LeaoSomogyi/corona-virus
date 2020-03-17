import { CountryInfo } from './country-info.model';
import { KeyValue } from '@angular/common';
import { CountryTimelineData } from './country-timeline-data.model';

export class CountryTimeline {
    countrytimelinedata: Array<CountryInfo>;
    timelineitems: Array<KeyValue<string, CountryTimelineData>>;
}