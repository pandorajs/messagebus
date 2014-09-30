define(function(require, exports, module) {

    /**
     * 消息总线
     * @module Messagebus
     */
    'use strict';

    var Base = require('base');

    /**
     * 消息总线
     *
     * @class Messagebus
     * @extends Base
     * @constructor
     */
    var Messagebus = Base.extend({

        defaults: {

        },

        initialize: function() {

        }

    });

    /**
     * 单例
     */
    function Agency() {
        if (Agency.instance) {
            return Agency.instance;
        }
        Agency.instance = new Messagebus(arguments);
        return Agency.instance;
    }

    module.exports = Agency;

});
