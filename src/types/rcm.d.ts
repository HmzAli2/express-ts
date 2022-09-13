interface GeneralMaster {
  ShortDesc: string;
  LongDesc: string;
}

interface Reason {
  reason: string;
}

interface Organization {
  type: string;
}

interface EntityType {
  type: string;
}

interface StatusByEntity {
  entityType: EntityType;
  entityName: Organization;
  status: boolean;
  effFrom: Date;
  effTo: Date;
  reason: Reason;
}

interface ChargeType extends GeneralMaster {
  chargeType: string;
  statusByEntity: StatusByEntity;
}

interface ChargeGroup extends GeneralMaster {
  chargeGroup: string;
  statusByEntity: StatusByEntity;
}

interface ChargeCategory extends GeneralMaster {
  chargeCategory: string;
  statusByEntity: StatusByEntity;
}

interface ChargeCodeSet extends GeneralMaster {
  ChargeCodeSet: string;
}

interface EncounterType {
  name: string;
}

interface UOM {
  name: string;
}

export interface ChargeMaster {
  chargeCodeSet: ChargeCodeSet;
  chargeCode: string;
  shortDesc: string;
  longDesc: string;
  chargeType: ChargeType;
  chargeGroup: ChargeGroup;
  chargeCategory: ChargeCategory;
  rateEntryByUser: boolean;
  descriptionUpdateByUser: boolean;
  directEntry: boolean;
  materialItem: boolean;
  nonPatientService: boolean;
  capturePerformingDept: boolean;
  applEncounterTypes: EncounterType[];
  baseQty: number;
  maxQty: number;
  maxServiceQtyCheckForDuration: number;
  maxOrderQty: number;
  withinDurationValue: number;
  package: boolean;
}
