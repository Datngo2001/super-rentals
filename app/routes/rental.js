import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';
import Route from '@ember/routing/route';

export default class RentalRoute extends Route {

 @service store;

  async model(params) {
    const { content } = await this.store.request(
      findRecord('rental', params.rental_id),
    );
    return content.data;
  }
}
  