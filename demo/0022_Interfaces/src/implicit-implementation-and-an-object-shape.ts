interface IKickable {
  kick(distance: number): void;
}
class Ball {
  kick(distance: number): void {
    console.log('Kicked', distance, 'meters!');
  }
}

let kickable: IKickable = new Ball();

kickable.kick(40);
