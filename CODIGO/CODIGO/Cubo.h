#pragma once
#include <GL/glew.h>
#include <GL/freeglut.h>
#include "glApplication.h"
#include "glutWindow.h"
#include <iostream>
#include "glsl.h"
#include <time.h>
class Cubo
{
public:
	Cubo() {};
	void dibujarCubo(float x, float y, float z, float red, float green, float blue, float solid, float angulo, float x1, float y1, float z1);

};

