export class Vector3d {
  #coords = [];
  constructor(x, y, z) {
    this.coords = [x, y, z];
  }
  get coords() {
    return [...this.#coords];
  }
  set coords(coords) {
    if (!Array.isArray(coords)) {
      throw new Error("Assigned value must be an array");
    }
    const [x, y, z] = coords;
    if (this.#areNumbers(x, y, z)) {
      this.#coords = [x, y, z];
    } else {
      throw new Error("Coordinates are incorrect");
    }
  }
  #areNumbers = (...coords) => {
    return coords.every((c) => typeof c === "number");
  };
  add = (vector) => {
    if (!this.#isVector(vector)) {
      throw new Error("Parameter must be a Vector3d object");
    }
    this.#coords = this.#coords.reduce((accum, current, index) => {
      accum[index] = current + vector.coords[index];
      return accum;
    }, []);
    return this;
  };
  substract = (vector) => {
    if (!this.#isVector(vector)) {
      throw new Error("Parameter must be a Vector3d object");
    }
    this.#coords = this.#coords.reduce((accum, current, index) => {
      accum[index] = current - vector.coords[index];
      return accum;
    }, []);
    return this;
  };
  multiplyByScalar = (scalar) => {
    if (!this.#areNumbers(scalar)) {
      throw new Error("Scalar must be a number");
    }
    this.#coords.forEach((c, index) => {
      this.#coords[index] = scalar * c;
    });
    return this;
  };

  scalarMultiplyWith = (vector) => {
    if (!this.#isVector(vector)) {
      throw new Error("Parameter must be a Vector3d object");
    }
    return this.#coords.reduce(
      (accum, c, index) => accum + c * vector.coords[index],
      0
    );
  };
  set = (vector) => {
    if (!this.#isVector(vector)) {
      throw new Error("Parameter must be a Vector3d object");
    }
    this.#coords = vector.coords;
    return this;
  };
  copy = () => {
    return new Vector3d(...this.#coords);
  };
  get length() {
    return Math.sqrt(this.#coords.reduce((accum, c) => accum + c * c, 0));
  }
  set length(value) {
    throw new Error("Value of length cannot be assigned");
  }
  normalize = () => {
    const length = this.length;
    this.#coords.forEach((c, index) => {
      this.#coords[index] = Math.round((c / length) * 1000) / 1000;
    });
    return this;
  };
  equals = (vector) => {
    if (!this.#isVector(vector)) {
      throw new Error("Parameter must be a Vector3d object");
    }
    return this.#coords.every((c, index) => {
      return c === vector.coords[index];
    });
  };
  toString = () => {
    return `(${this.#coords.join(", ")}) `;
  };
  #isVector = (vector) => {
    return vector instanceof Vector3d;
  };
}
