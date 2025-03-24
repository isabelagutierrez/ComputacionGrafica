var createScene = function () {

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);

    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.7;

    BABYLON.SceneLoader.ImportMesh("", "https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "pinochio.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(12, 12, 12);
        newMeshes[0].position = new BABYLON.Vector3(25, 1.5, -25);
        newMeshes[0].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(0), BABYLON.Space.LOCAL);

        if (!newMeshes[0].material){
            newMeshes[0].material = new BABYLON.PBRMaterial("pinochoMaterial", scene);
        }

        newMeshes[0].material.bumpTexture = new BABYLON.Texture("https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/TEXTURAS/maderaMap.png", scene);
        newMeshes[0].material.bumpTexture.level = 1;
    });

    
    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "graneroDos.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        newMeshes[0].position = new BABYLON.Vector3(20, 0, -25);

        if (!newMeshes[0].material){
            newMeshes[0].material = new BABYLON.PBRMaterial("casaMaterial", scene);
        }

        newMeshes[0].material.bumpTexture = new BABYLON.Texture("https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/TEXTURAS/maderaCasa.png", scene);
        newMeshes[0].material.bumpTexture.level = 1;
    });

    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "dog.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(12, 12, 12);
        newMeshes[0].position = new BABYLON.Vector3(30, 1.5, -40);
        newMeshes[0].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(180), BABYLON.Space.LOCAL);
        newMeshes[0].rotate(BABYLON.Axis.X, BABYLON.Tools.ToRadians(180), BABYLON.Space.LOCAL);
    });

    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "farmer.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(8, 8, 8);
        newMeshes[0].position = new BABYLON.Vector3(20, 5, -45);
        newMeshes[0].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(180), BABYLON.Space.LOCAL);
    });

    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "grass.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
        newMeshes[0].position = new BABYLON.Vector3(0, -7, 0);
    });

    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "caballo.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
        newMeshes[0].position = new BABYLON.Vector3(30, 0, 25);
    });

    
    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "caballo.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
        newMeshes[0].position = new BABYLON.Vector3(40, 0, 18);
    });

    BABYLON.SceneLoader.ImportMesh("", " https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/", "dogHouse.glb", scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        newMeshes[0].position = new BABYLON.Vector3(40, -1, -45);
        newMeshes[0].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(180), BABYLON.Space.LOCAL);

        if (!newMeshes[0].material){
            newMeshes[0].material = new BABYLON.PBRMaterial("pinochoMaterial", scene);
        }

        newMeshes[0].material.bumpTexture = new BABYLON.Texture("https://isabelagutierrez.github.io/ComputacionGrafica/BABYLON/TEXTURAS/maderaCasa.png", scene);
        newMeshes[0].material.bumpTexture.level = 1;
    });

    return scene;
};