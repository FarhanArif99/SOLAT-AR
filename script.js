// Pastikan Three.js dan GLTFLoader telah dimuatkan
const scene = document.querySelector("a-scene");

// Gunakan GLTFLoader untuk model 3D
const loader = new THREE.GLTFLoader();
loader.load('praying_model.gltf', function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Saiz model
    model.position.set(0, 0, 0); // Kedudukan model
    
    // Masukkan model ke dalam elemen A-Frame
    document.querySelector("#gltf-model").object3D.add(model);
}, undefined, function (error) {
    console.error("Ralat memuatkan model 3D: ", error);
});
