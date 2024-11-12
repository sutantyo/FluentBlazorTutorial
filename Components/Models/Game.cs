namespace BasicTutorial.Components.Models;

public class Game(int gameId, string name, int rating) {
  
  public int GameId { get; set; } = gameId;
  public string Name { get; set; } = name;
  public int Rating { get; set; } = rating;

}
