//4.27 Tetris 6//

/*
A partir del código proporcionado a continuación, haz que una pieza al azar aparezca desde fuera, arriba en el canvas, y vaya bajando. Cuando desaparezca del canvas por abajo, haz que aparezca una nueva. 

Vídeo demostrativo: http://multimedia.uoc.edu/~pda/videos/PAC4/4_27.mp4

Nota: Si estás seguro de querer utilizar tu propio código en vez del que te proporcionamos, lo puedes hacer.

Pasos
1. Comprende el código de partida
Nota que en el código de partida hemos eliminado todas las traslaciones para que las piezas se dibujen todas en el mismo sitio (0,0). Observa, además, las variables que hemos añadido, ya que te darán una pista sobre cómo proceder

2. Determina la pieza que se va a dibujar en el setup()
En el setup() determina aleatoriamente la primera pieza que se va a dibujar y asócialo a la variable ident

3. Programa una estructura de condicionales para dibujar la pieza en el draw()
Dibuja la pieza que corresponde al valor de la variable ident(0 caja, 1 L, 2 I, 3 S, 4T), añadiendo una estructura de condicionales en el draw(). Por cada ficha tendrás que actualizar, además, los valores de sus dimensiones (variables anchoAct y altoAct)

4. Añade una translación a la pieza
Añade una translación que afecte a la pieza que se dibuje y haz que la pieza se vaya moviendo hacia abajo, aplicándole velocidad. Utiliza las variables anchoAct y altoAct para acabar de ajustar la posición según las dimensiones de la ficha actual

5. Controla si la pieza ha salido del canvas
Mediante las variables que tienes a disposición, controla si la pieza ha salido del canvas y, si es así, cuando la pieza haya desaparecido por completo, haz que se dibuje otra al azar
*/

