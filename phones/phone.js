var Phone = function() {
    this.data = {Model : '', Color : '' ,Price : ''};

    this.setModel = function(m) {
        this.data['Model'] = m;
    };

    this.setColor = function(c) {
        this.data['Color'] = c;
    };

    this.setPrice = function(p) {
        this.data['Price'] = p;
    };

    this.getInfo = function() {
        return {
            model: this.data['Model'],
            color: this.data['Color'],
            price: this.data['Price'],
        }
    }

    this.fill = function(info) {
        for(number in info) {
            if(this.data[number] !== 'undefined') {
                this.data[number] = info[number];
            }
        }
    }

    this.fill2 = function(info) {
        for(number in info) {
            if(this.data[number] !== 'undefined') {
                this.data[number] = info[number];
            }
        }
    }

    this.fill4 = function(info) {
        for(number in info) {
            if(this.data[number] !== 'undefined') {
                this.data[number] = info[number];
            }
        }
    }
  
    this.fill5 = function(info) {
        for(number in info) {
            if(this.data[number] !== 'undefined') {
                this.data[number] = info[number];
            }
        }
    }
  
    this.fill6 = function(info) {
        for(number in info) {
            if(this.data[number] !== 'undefined') {
                this.data[number] = info[number];
            }
        }
    }
};

module.exports = function(data) {
    var instance = new Phone();
    instance.fill(data);
    return instance;
};