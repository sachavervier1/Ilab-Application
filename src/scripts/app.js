'use strict'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);
