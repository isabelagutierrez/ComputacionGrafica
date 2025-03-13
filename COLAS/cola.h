#pragma once
#include <GL/glew.h>
#include <GL/freeglut.h>
#include "glApplication.h"
#include "glutWindow.h"
#include "glsl.h"

class cola
{
public:
	cola() {}
	void DibujarCola(float angle, float x, float y, float z);
	void dibujarEspiral(float a, float b, float t);
};
