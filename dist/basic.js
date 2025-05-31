"use strict";

function healthStatus(parametr) {
  if (parametr.health > 50) {
    return 'healthy';
  } else if (parametr.health > 15 && parametr.health < 50) {
    return 'wounded';
  }
  if (parametr.health < 15) {
    return 'critical';
  }
}
module.exports = {
  healthStatus
};