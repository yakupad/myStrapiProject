'use strict';

/**
 * Gifts.js controller
 *
 * @description: A set of functions called "actions" for managing `Gifts`.
 */

module.exports = {

  /**
   * Retrieve gifts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.gifts.fetchAll(ctx.query);
  },

  /**
   * Retrieve a gifts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.gifts.fetch(ctx.params);
  },

  /**
   * Create a/an gifts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.gifts.add(ctx.request.body);
  },

  /**
   * Update a/an gifts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.gifts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an gifts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.gifts.remove(ctx.params);
  }
};
