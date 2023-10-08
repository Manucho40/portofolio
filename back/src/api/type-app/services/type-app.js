'use strict';

/**
 * type-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-app.type-app');
