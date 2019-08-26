//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const FaceTracking = require('FaceTracking');
//const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');

const obj = Scene.root.find("cancelado0");
let face = FaceTracking.face(0);
function update(){
    if(face.mouth.openness.gt(0.5)){
        obj.hidden = true;
    }else if(face.mouth.openness.gt(0.5)){
        obj.hidden = false;
    }
}
update();
// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');
