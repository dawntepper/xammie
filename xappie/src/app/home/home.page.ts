import { Component, OnInit } from '@angular/core';
import { DietaryChoicesService } from '../services/dietary-choices.service';
import { ClothingTextilesService } from '../services/clothing-textiles.service';
import { WaterUsageService } from '../services/water-usage.service';
import { EnergyEfficiencyService } from '../services/energy-efficiency.service';
import { TransportationAlternativesService } from '../services/transportation-alternatives.service';
import { ElectronicsGadgetsService } from '../services/electronics-gadgets.service';
import { GardeningLandscapingService } from '../services/gardening-landscaping.service';
import { PurchasingDecisionsService } from '../services/purchasing-decisions.service';
import { RenewableEnergyService } from '../services/renewable-energy.service';
import { LifestyleChangesService } from '../services/lifestyle-changes.service';
import { FeedItem } from '../models/feed-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  feed: any[] = [];
  totalCarbonSaved: number = 0;

  constructor(
    private dietaryChoicesService: DietaryChoicesService,
    private clothingTextilesService: ClothingTextilesService,
    private waterUsageService: WaterUsageService,
    private energyEfficiencyService: EnergyEfficiencyService,
    private transportationAlternativesService: TransportationAlternativesService,
    private electronicsGadgetsService: ElectronicsGadgetsService,
    private gardeningLandscapingService: GardeningLandscapingService,
    private purchasingDecisionsService: PurchasingDecisionsService,
    private renewableEnergyService: RenewableEnergyService,
    private lifestyleChangesService: LifestyleChangesService
  ) {}

  ngOnInit() {
    this.loadFeed();

  }

  loadFeed() {
    this.dietaryChoicesService.getDietaryChoices().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.clothingTextilesService.getClothingTextiles().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.waterUsageService.getWaterUsage().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.energyEfficiencyService.getEnergyEfficiency().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.transportationAlternativesService.getTransportationAlternatives().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });
    
    this.electronicsGadgetsService.getElectronicGadgets().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.gardeningLandscapingService.getGardeningLandscaping().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.purchasingDecisionsService.getPurchasingDecisions().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.renewableEnergyService.getRenewableEnergy().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });

    this.lifestyleChangesService.getLifestyleChanges().subscribe(data => {
      this.feed = this.feed.concat(data);
      this.calculateTotalCarbonSaved(data);
    });
  }

  calculateTotalCarbonSaved(data: any[], criteria?: any) {
    data.forEach(item => {
      if (item.carbonFootprintSaved) {
        this.totalCarbonSaved += item.carbonFootprintSaved;
        
        if (criteria) {
          // Filter data based on criteria
          // Example: Filter by country
          if (item.country === criteria.country) {
            // Add to a separate total for this criteria
          }
        }
      }
    });
  }
  
}
