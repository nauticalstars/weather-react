import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Winnipeg</h1>
      <ul>
        <li>Wednesday 07:00 pm</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAb5JREFUeNrtmtuNgzAQRSmBElwCJbgESuBzy6AESnAJlEAJ/PJHOqAD73g10QJa8sJ4huUiXSlyHMX3jM34lXnvsysrAwAAAAAAAAAAAAAAAAAAAIDfwg8ff/sypIrkSD3Jb6jnOqGuyRI/0QGQCUtqHxh+pvBbezoAbLzbYXytLgWI3QCokTmpiWh8rUYtADbfH2h+/p7IVQGgBhWkKYH5u8bwnyoAcORTmp9DyEUBJOz2m8NBGkAjaD76i/EtAJzqvBJZCQCdIgBdUgDKoh+tF7wDoFUIoE0CgBc2XqnyFAAqYZNhtVjyMLT8OZTVoX3DMBiSI00kz5q4zMQA4KRy/rPZHxksVsbXCt8VewH0QuZzanxQ/Ud0a478I/Pz+mYPAInoFxzh/gWDr8idCYBj83Uk8z+94CMAQhmgZABTRAD+LD0gzDYNj31/gBbZQRuAavZ2PwrAIjtoAlCx8ZI0Hmx+kR00pMFuZt4nltMwEbpHfxQAMGmYCtsEY35T4ouhTPBRsRw+C4Brb4hcfksMm6LYFsfBCI7GcDiK43FckMAVGVySuto1OdwUBQAAAAAAAAAAAAAAAAAA+Pf6Bm5v6/1bJGiwAAAAAElFTkSuQmCC"
            alt="partly cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
