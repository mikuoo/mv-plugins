/*=============================================================================
 * Orange - Time System Variables
 * By Hudell - www.hudell.com
 * OrangeTimeSystemVariables.js
 * Version: 1.0
 * Free for commercial and non commercial use.
 *=============================================================================*/
 /*:
 * @plugindesc Exports Orange Time System data to variables
 *             
 * @author Hudell
 *=============================================================================
 *
 * @param secondVariable
 * @desc The number of the variable where you want to store the seconds
 * @default 0
 *
 * @param minuteVariable
 * @desc The number of the variable where you want to store the minutes
 * @default 0
 *
 * @param hourVariable
 * @desc The number of the variable where you want to store the hours
 * @default 0
 *
 * @param dayVariable
 * @desc The number of the variable where you want to store the days
 * @default 0
 *
 * @param monthVariable
 * @desc The number of the variable where you want to store the months
 * @default 0
 *
 * @param yearVariable
 * @desc The number of the variable where you want to store the years
 * @default 0
 *
 * @param weekDayVariable
 * @desc The number of the variable where you want to store the week day
 * @default 0
 *
 * @param dayPeriodVariable
 * @desc The number of the variable where you want to store the day period
 * @default 0
 *
 *
 * @help
 * ============================================================================
 * Latest Version
 * ============================================================================
 * 
 * Get the latest version of this script on http://link.hudell.com/time-system-variables
 * 
 *=============================================================================*/

var Imported = Imported || {};
var OrangeTimeSystemVariables = OrangeTimeSystemVariables || {};

if (Imported['MVCommons'] === undefined) {
  console.log('Download MVCommons: http://link.hudell.com/mvcommons');
  throw new Error("This library needs MVCommons to work properly!");
}

if (PluginManager.version('OrangeTimeSystem', '>=', '0.1.0') === false) {
  console.log('Download MVCommons: http://link.hudell.com/time-system');
  throw new Error("This library requires the OrangeTimeSystem!");
}

(function($) {
  "use strict";

  $.Parameters = PluginManager.parameters('OrangeTimeSystemVariables');
  $.Param = $.Param || {};

  $.Param.secondVariable = Number($.Parameters['secondVariable'] || 0);
  $.Param.minuteVariable = Number($.Parameters['minuteVariable'] || 0);
  $.Param.hourVariable = Number($.Parameters['hourVariable'] || 0);
  $.Param.dayVariable = Number($.Parameters['dayVariable'] || 0);
  $.Param.monthVariable = Number($.Parameters['monthVariable'] || 0);
  $.Param.yearVariable = Number($.Parameters['yearVariable'] || 0);
  $.Param.weekDayVariable = Number($.Parameters['weekDayVariable'] || 0);
  $.Param.dayPeriodVariable = Number($.Parameters['dayPeriodVariable'] || 0);

  $.configureVariables = function() {
    if ($.Param.secondVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.secondVariable, OrangeTimeSystem.seconds);
    }
    if ($.Param.minuteVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.minuteVariable, OrangeTimeSystem.minute);
    }
    if ($.Param.hourVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.hourVariable, OrangeTimeSystem.hour);
    }
    if ($.Param.dayVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.dayVariable, OrangeTimeSystem.day);
    }
    if ($.Param.monthVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.monthVariable, OrangeTimeSystem.month);
    }
    if ($.Param.yearVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.yearVariable, OrangeTimeSystem.year);
    }
    if ($.Param.weekDayVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.weekDayVariable, OrangeTimeSystem.weekDay);
    }
    if ($.Param.dayPeriodVariable !== undefined && $.Param.secondVariable > 0) {
      $gameVariables.setValue($.Param.dayPeriodVariable, OrangeTimeSystem.dayPeriod);
    }
  };

  // Updates the variables every in-game second
  OrangeTimeSystem.on('changeSecond', $.configureVariables);
})(OrangeTimeSystemVariables);

PluginManager.register("OrangeTimeSystemVariables", "1.0.0", "Exports Orange Time System data to variables", {
  email: "plugins@hudell.com",
  name: "Hudell",
  website: "http://www.hudell.com"
}, "2015-10-22");