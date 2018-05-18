'use strict';

/**
 * AllUsers.js controller
 *
 * @description: A set of functions called "actions" for managing `AllUsers`.
 */

module.exports = {

  /**
   * Retrieve allUsers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.allUsers.fetchAll(ctx.query);
  },

  /**
   * Retrieve a allUsers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.allUsers.fetch(ctx.params);
  },

  /**
   * Create a/an allUsers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.allUsers.add(ctx.request.body);
  },

  /**
   * Update a/an allUsers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.allUsers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an allUsers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.allUsers.remove(ctx.params);
  }
};
