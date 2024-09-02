namespace MyNameSpace{

  enum Color {
    red = 'red',
    blue = 'blue',
    green = 'green'
}

  const returnColor = (color: Color): string=>{
    switch(color){
      case Color.red:
        return 'The color is red';
      case Color.blue:
        return 'The color is blue';
      case Color.green:
        return 'The color is green';
      default:
        return 'The color is not recognized';
    }
  }

}