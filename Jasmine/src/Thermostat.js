function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.MIN_TEMP = 10;
  this.powersave = true;
};

Thermostat.prototype.up = function(unit) {
  if(this.powersave && (this.temperature + unit) > 25) {
  throw "Powersave mode is on, can't go above 25";
  }
   else if(this.powersave === false && (this.temperature + unit) > 32) {
  throw "You wasteful anti-environmental you";
  }
  else {
    this.temperature += unit;
  };
};

Thermostat.prototype.down = function(unit) {
  this.temperature -= unit;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.usage = function(temperature) {
  if (this.temperature <18) {
    return 'low-usage';
  }
  else if (this.temperature > 17 && this.temperature < 25) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  };
};
