"use strict";

function healthStatus(parametr) {
  console.log(parametr.health);
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