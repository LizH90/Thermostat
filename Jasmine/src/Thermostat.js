function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.MIN_TEMP = 10;
  this.powersave = true;
  this.usage = 'medium-usage';
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

Thermostat.prototype.check = function(temperature) {
  switch(temperature) {
    case temperature <18:
        this.usage = 'low-usage';
        break;
    case temperature < 25:
        this.usage = 'medium-usage'
        break;
    default:
        this.usage = 'high-usage'
}
};
