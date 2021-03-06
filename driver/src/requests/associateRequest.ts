import { Request } from './request';

export default class AssociateRequest implements Request {
  public target: Xrm.LookupValue;

  public relatedEntities: Xrm.LookupValue[];

  public relationship: string;

  constructor(target: Xrm.LookupValue, relatedEntities: Xrm.LookupValue[], relationship: string) {
    this.target = target;
    this.relatedEntities = relatedEntities;
    this.relationship = relationship;
  }

  public getMetadata(): Xrm.Metadata.ActionRequestMetadata {
    return {
      parameterTypes: {
        target: {
          typeName: `mscrm.${this.target.entityType}`,
          structuralProperty: 5,
        },
        relatedEntities: {
          typeName: 'Collection(mscrm.crmbaseentity)',
          structuralProperty: 4,
        },
        relationship: {
          typeName: 'Edm.String',
          structuralProperty: 1,
        },
      },
      operationType: 2,
      operationName: 'Associate',
    };
  }
}
