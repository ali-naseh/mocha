import { useEffect, useRef } from "react";

// draw twikiling stars on a canvas in landing page
const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    function Star(cx, cy, spikes, outerRadius, innerRadius, color, shadowBlur) {
      this.cx = cx;
      this.cy = cy;
      this.spikes = spikes;
      this.outerRadius = outerRadius;
      this.innerRadius = innerRadius;
      this.rChange = 0.038;
      this.color = color;
      this.shadowBlur = shadowBlur;
    }

    Star.prototype = {
      constructor: Star,
      render: function () {
        var rot = (Math.PI / 2) * 3;
        var x = this.cx;
        var y = this.cy;
        var step = Math.PI / this.spikes;

        context.beginPath();
        context.moveTo(this.cx, this.cy - this.outerRadius);
        for (let i = 0; i < this.spikes; i++) {
          x = this.cx + Math.cos(rot) * this.outerRadius;
          y = this.cy + Math.sin(rot) * this.outerRadius;
          context.lineTo(x, y);
          rot += step;

          x = this.cx + Math.cos(rot) * this.innerRadius;
          y = this.cy + Math.sin(rot) * this.innerRadius;
          context.lineTo(x, y);
          rot += step;
        }
        context.lineTo(this.cx, this.cy - this.outerRadius);
        context.closePath();
        context.lineWidth = 3;
        context.shadowBlur = this.shadowBlur;
        context.shadowColor = this.color;
        context.strokeStyle = this.color;
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
      },
      update: function () {
        if (this.innerRadius > 3.8 || this.innerRadius < 0.2) {
          this.rChange = -this.rChange;
        }
        if (this.innerRadius <= 0.35 && this.innerRadius >= 0) {
          this.color = "#1D2025";
          this.shadowBlur = 0;
        } else {
          this.color = randomColor();
          this.shadowBlur = 8;
        }

        this.innerRadius += this.rChange;
        this.outerRadius = 0.7;
      },
    };
    var canvas = canvasRef.current;
    var context = canvas.getContext("2d");

    var C_WIDTH = (canvas.width = document.body.offsetWidth);
    var C_HEIGHT = (canvas.height = document.body.offsetHeight);
    function randomColor() {
      var arrColors = ["ffffff", "ffecd3", "bfcfff"];
      return "#" + arrColors[Math.floor(Math.random() * 3)];
    }

    var arrStars = [];
    for (let i = 0; i < 100; i++) {
      var randX = Math.floor(Math.random() * C_WIDTH + 2);
      var randY = Math.floor(Math.random() * C_HEIGHT + 1);
      var randInnerR = Math.random() * 2;

      var star = new Star(randX, randY, 4, 1.5, randInnerR, randomColor(), 8);
      if (
        (randX < 400 && randY < 300) ||
        (randX > C_WIDTH * 0.6 && randY > C_HEIGHT * 0.6)
      ) {
        arrStars.push(star);
      }
    }
    function update() {
      for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].update();
      }
    }
    function animate() {
      update();
      context.clearRect(0, 0, C_WIDTH, C_HEIGHT);
      for (var i = 0; i < arrStars.length; i++) {
        arrStars[i].render();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Stars;
