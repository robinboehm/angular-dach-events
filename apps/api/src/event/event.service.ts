import { Injectable } from '@nestjs/common';

import { Event } from '@angular-dach-events/api-interface';
@Injectable()
export class EventService {
    findAll(): Event[] {
        return [{
            id: '1',
            name: 'NG-DE',
            description: `NG-DE is the first non-profit community-driven Angular conference in Germany. It will take place in Berlin, 30 - 31 August 2019. The venue BOLLE FESTSÄLE is located next to the beautiful Spree river, close to Bellevue palace and Tiergarten. A bunch of one-day workshops are planned for August 29 which can be booked separately from the main event.`,
            adress: `BOLLE FESTSÄLE
      Alt-Moabit 98
      10559 Berlin`,
            city: 'Berlin',
            starts_at: new Date(),
            ends_at: new Date()
        }];
    }

    findOneById(id: string): Event {
    return {
        id: id,
        name: 'NG-DE',
        description: `NG-DE is the first non-profit community-driven Angular conference in Germany. It will take place in Berlin, 30 - 31 August 2019. The venue BOLLE FESTSÄLE is located next to the beautiful Spree river, close to Bellevue palace and Tiergarten. A bunch of one-day workshops are planned for August 29 which can be booked separately from the main event.`,
        adress: `BOLLE FESTSÄLE
  Alt-Moabit 98
  10559 Berlin`,
        city: 'Berlin',
        starts_at: new Date(),
        ends_at: new Date()
    };
}
}
