#include "cola.h"

void cola::DibujarCola(float angle, float x, float y, float z) {

	glPushMatrix();

	glTranslatef(-1.0, 0.0, 0.0);

	glRotatef(angle, 0.0, 0.0, 1.0);

	glTranslatef(1.0, 0.0, 0.0); glPushMatrix();

	//glScalef(2.0, 0.4, 1.0);

	glutSolidCube(1.0);

	glPopMatrix();


	for (int i = 0; i < 5; i++) {
		glTranslatef(1.0, 0.0, 0.0);

		glRotatef(angle, 0.0, 0.0, 1.0);

		glTranslatef(1.0, 0.0, 0.0);

		glPushMatrix();

		//glScalef(2.0, 0.4, 1.0);

		glutWireCube(1.0);

		glPopMatrix();

	}
	glPopMatrix();

}

void cola :: dibujarEspiral(float a, float b, float max_t){

	glLineWidth(8.0f);

	glBegin(GL_LINE_STRIP); 
	for (float t = 0.0f; t < max_t; t += 0.01f) { 
		float r = a + b * t;
		float x = r * cos(t);
		float y = r * sin(t);

		glVertex2f(x, y);  
	}
	glEnd();


}
