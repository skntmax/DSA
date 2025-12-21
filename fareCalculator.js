


class  FareCalculator {
    constructor() {
        this.baseFare =  {
          bike: {
            baseFare: 40,        // doubled from 20
            perKm: 12,           // doubled from 6
            baseKm: 2,
            waitingRate: 1       // doubled from 0.5
          },
          cabEconomy: {
            baseFare: 100,       // doubled from 50
            perKm: 24,           // doubled from 12
            baseKm: 2,
            waitingRate: 3       // doubled from 1.5
          },
          cabXL: {
            baseFare: 200,       // doubled from 100
            perKm: 36,           // doubled from 18
            baseKm: 2,
            waitingRate: 5       // doubled from 2.5
          },
          autoNCR: {
            baseFare: 60,        // doubled from 30
            perKm: 18,           // doubled from 9
            baseKm: 2,
            waitingRate: 2       // doubled from 1
          },
          cabPremium: {
            baseFare: 300,       // doubled from 150
            perKm: 44,           // doubled from 22
            baseKm: 2,
            waitingRate: 6       // doubled from 3
          },
          sharedCab: {
            baseFare: 80,        // doubled from 40
            perKm: 16,           // doubled from 8
            baseKm: 2,
            waitingRate: 2       // doubled from 1
          }
        };
    }

    getRideConfig(type) {         
        return this.baseFare[type]
    }

        toRad(value) {
       return (value * Math.PI) / 180;
    }

     haversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
          Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      }

        isNightTime() {
        const hour = new Date().getHours();
        return hour >= 22 || hour < 5;
        }


    calculateFare(lat1, lon1, lat2, lon2, rideType, waitMin) {
        const config = this.getRideConfig(rideType);
        const distance = this.haversineDistance(lat1, lon1, lat2, lon2);
        const roundedDistance = Math.max(0, distance.toFixed(2));

        let fare = config.baseFare;

        if (distance > config.baseKm) {
          fare += (distance - config.baseKm) * config.perKm;
        }

        const waitingCharge = waitMin * config.waitingRate;
        fare += waitingCharge;

        const night = this.isNightTime();
        if (night) {
          fare *= 1.2; // 20% extra for night
        }

        const gstAmount = fare * 0.05;
        const totalFare = Math.round(fare + gstAmount);

        return {
          rideType,
          distance: roundedDistance,
          waitingCharge: waitingCharge.toFixed(2),
          isNight: night,
          gst: gstAmount.toFixed(2),
          netFare: totalFare
        };
    }

}


let fr1 = new FareCalculator()

let bikeFare = fr1.calculateFare(28.578081,77.317778,28.64191,77.222053,"bike",0)
let cabEconomyFare = fr1.calculateFare(28.578081,77.317778,28.64191,77.222053,"cabEconomy",0)
let cabXLFare = fr1.calculateFare(28.578081,77.317778,28.64191,77.222053,"cabXL",0)

console.log(cabXLFare)