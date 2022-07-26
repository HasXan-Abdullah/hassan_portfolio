import React,{useEffect} from 'react';
import "./Home.css";
import * as THREE from 'three'
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import face1 from '../../images/pngegg (8).png';
import moonImage from '../../images/moon.jpg';



import { Typography } from "@mui/material";
import TimeLine from '../TimeLine/TimeLine';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
  } from "react-icons/si";
import ProjectCard from '../Projects/ProjectCard';


const Home = () => {

    //threejs code in use effect to render only one time
 useEffect(() => {

    // creating scene and camera
     
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const canvas = document.querySelector(".homeCanvas")
    const renderer =new THREE.WebGLRenderer({canvas});
// creating texture loader
    const textureLoader = new THREE.TextureLoader();
    const moonTexture =textureLoader.load(moonImage);
   
    
    
//creating geometry of moon
    const moonGeometry =new THREE.SphereGeometry(3,64,64);
    const moonMaterial =new THREE.MeshStandardMaterial({map : moonTexture});
    const moon =new THREE.Mesh(moonGeometry,moonMaterial);
    ///
  
   
   

    //set venus positions

  
    // light
    const pointLight= new THREE.PointLight(0xffffff,1);
    pointLight.position.z =15;
    const pointLight2= new THREE.PointLight(0xffffff,1);
    pointLight2.position.z =-15;
    //controls
    // const controls = new OrbitControls(camera,renderer.domElement)
    //adding scenes
    scene.add(moon);
   
    scene.add(pointLight)
    scene.add(pointLight2)
    // scene.background=spaceTexture;
    camera.position.z = 30;
    
    // event listner
    const speed=0.01;
    window.addEventListener("mousemove", (e)=>{
        if (e.clientX<=window.innerWidth/2) {
            moon.rotation.y +=speed;
         
            moon.rotation.x +=speed;
        }
        if (e.clientY>window.innerWidth/2) {
            moon.rotation.y -=speed;
            moon.rotation.z -=speed;
            moon.rotation.x -=speed;
        }
    })
   
   

    const animate = () =>{ 
        requestAnimationFrame(animate);
        moon.rotation.y +=0.01;
        moon.rotation.z +=0.01;
        moon.rotation.x +=0.01;
        //
        
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.render(scene,camera);

    }
  animate();
  
    return window.addEventListener("scroll",(e)=>{
        camera.rotation.y=window.scrollY*0.003
        
        if (window.scrollY>1200) {
            let SkillsBox = document.getElementById("homeSkillsBox");
            SkillsBox.style.animationName="homeSkillsBoxAnimationOn";
        }
        else{ 
            let SkillsBox = document.getElementById("homeSkillsBox");
            SkillsBox.style.animationName="homeSkillsBoxAnimationOff";
        }
      });


 
    
}, []);

    return (
        <div className='home'>
           
            <canvas className="homeCanvas"></canvas>
            <div className="homeContainer">
                <Typography variant='h3'>
                    TIMELINE    
                </Typography>
               <TimeLine timelines={[1,2,3,4]}/>
            </div>
            <div className="homeSkills">
                <Typography variant="h3">SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homCubeSkillsFaces homCubeSkillsFace1">
                        <img src={face1}
                         alt="Face1"  />
                    </div>
                    <div className="homCubeSkillsFaces homCubeSkillsFace2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"
                         alt="Face2"  />
                    </div>
                    <div className="homCubeSkillsFaces homCubeSkillsFace3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"
                         alt="Face3"  />
                    </div>
                    <div className="homCubeSkillsFaces homCubeSkillsFace4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"
                         alt="Face4"  />
                    </div>
                    <div className="homCubeSkillsFaces homCubeSkillsFace5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"
                         alt="Face5"  />
                    </div>
                    <div className="homCubeSkillsFaces homCubeSkillsFace6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"
                         alt="Face6"  />
                    </div>
                    
                </div>
                <div className="cubeShadow"></div>
                
                <div className="homeSkillsBox" id='homeSkillsBox'>
                <SiCplusplus />
                <SiHtml5 />
                 <SiCss3 />
                <SiJavascript />
                 <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
                <SiThreedotjs />
                </div>
              
            </div>
            <div className="homeProjects">
                    <Typography variant='h3'>
                        Recents Projects
                    </Typography>
                    <div className="homeProjectWrapper">
                        <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"/>
                        <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"/>
                        <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s"/>

                    </div>
                </div>
        </div>
        
    );
}

export default Home;
