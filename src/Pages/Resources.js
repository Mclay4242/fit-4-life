import React from "react";
import ResourceCSS from "../assets/CSS/resource_center.module.css";
//import '../JS/index.js'

export default function Resources() {
  return (
    <>
      <div class={ResourceCSS.about}>
        <h1>Resources</h1>
        <div class="topic1">
          Topic 1<p>Here will be links for topic 1</p>
        </div>
        <div class="topic2">
          Topic 2<p>Here will be links for topic 2</p>
        </div>
        <div class="topic3">
          Topic 3<p>Here will be links for topic 3</p>
        </div>
        <div class="topic4">
          Topic 4<p>Here will be links for topic 4</p>
        </div>
        <h1>FAQ</h1>
        <div class="question1">
          Question 1<p>Here will be answer 1</p>
        </div>
        <div class="question2">
          Question 2<p>Here will be answer 2</p>
        </div>
        <div class="question3">
          Question 3<p>Here will be answer 3</p>
        </div>
        <div class="question4">
          Question 4<p>Here will be answer 4</p>
        </div>
      </div>
    </>
  );
}
