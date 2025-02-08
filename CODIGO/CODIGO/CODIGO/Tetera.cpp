#include "Tetera.h"
void Tetera::dibujarTetera(float x, float y, float z, float red, float green, float blue, float solid) {
    glPushMatrix();
        glColor3f(red, green, blue);
        glTranslatef(x, y, z);
        glutSolidTeapot(solid);
        glEnd();
    glPopMatrix();
}