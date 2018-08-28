import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'leaves') {
      return this._super('leave');
    } else {
     return this._super(payloadKey);
    }
  }
});