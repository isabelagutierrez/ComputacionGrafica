#include "Cubo.h"
void Cubo::dibujarCubo(float x, float y, float z, float red, float green, float blue, float solid, float angulo, float x1, float y1, float z1) {
    glPushMatrix();
        glColor3f(red, green, blue);
        glTranslatef(x, y, z);
        glRotatef(angulo,x1,y1,z1);
        glutSolidCube(solid);
    glPopMatrix();
}