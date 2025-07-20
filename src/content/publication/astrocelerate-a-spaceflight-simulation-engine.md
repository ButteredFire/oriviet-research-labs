---
title: "Astrocelerate - A Spaceflight Simulation Engine"
description: "An introductory article on Astrocelerate, its short-term MVP and long-term vision, and design philosophy."
publishDate: "2025-07-20"
author: "Minh Dương"
tags: ["astrocelerate", "introduction"]
---

Astrocelerate is Vietnam’s first high-performance orbital mechanics and spaceflight simulation engine, designed from the ground up to serve as a sovereign alternative to foreign aerospace software.

## Goal
Developed in C++ with a Vulkan-based graphics pipeline and custom ECS architecture, Astrocelerate is engineered for real-time, physically accurate visualizations of satellite kinematics, launch trajectories, and maneuver simulations. But beyond technical performance, Astrocelerate stands for something far greater:

>The assertion that world-class aerospace tools can emerge from within Vietnam, built not by legacy contractors, but by a new generation of engineers who refuse to wait for permission.

Its mission is to empower academic institutions, disaster-response planners, space technologists, and national defense researchers with a transparent, extensible, and self-owned simulation platform. But more than that, it represents technological sovereignty in a domain long dominated by external systems.

Powered by Oriviet Aerospace. Grounded in Vietnam. Engineered for the stars.

## Vision
### Short-term vision (MVP)
The short term vision of Astrocelerate is to create a Minimum-Viable Product (MVP) that satisfies core features. Specifically, the MVP must be able to achieve these minima:
- Accurate real-time and interactive visualizations demonstrating simple scenarios (e.g., Earth-satellite orbit, basic maneuver simulation, the "launch, enter orbit, stage separation, re-entry, recovery" sequence)
- A clean, polished GUI (planned to be made with *Dear ImGui*)
- An Entity-Component-System (ECS)-based design

## Design philosophy
Astrocelerate's design philosophy takes inspiration from that of the Unity game engine and the GMAT spaceflight simulation engine.
These principles are subject to change over time, as Astrocelerate (and I) become more mature.

|              Core design principles              | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :----------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|         **Open-source**          | Astrocelerate aims to be transparent and thrives on community feedback, modification, and extension. Therefore, to maximize contribution and growth, it is decided that the engine should be open-source.                                                                                                                                                              |
| **ECS-based, Modular & Extensible Architecture** | Astrocelerate is structured to allow flexibility and modularity, allowing users to set up and develop their own environments, objects, gravity, etc. with built-in, third-party, and custom "modules". This is part of Astrocelerate's integration of Entity-Component-System principles.<br><br>Astrocelerate is built to allow third-party plug-ins and extensions, enabling researchers to integrate new models or solvers. |
|      **Non-proprietary scripting language**      | Astrocelerate allows users to program their own modules and override built-in counterparts with C++.                                                                                                                                                                                                                                                                                                                           |
|          **Support for real missions**           | Astrocelerate can be used for operational mission planning (e.g., lunar and interplanetary transfers, spacecraft launch-and-recovery procedures).                                                                                                                                                                                                                                                                              |