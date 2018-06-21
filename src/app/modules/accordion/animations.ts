import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  AnimationTriggerMetadata
} from "@angular/animations";

export const Animations = {
  animations: [
    trigger("expansionTrigger", [
      state(
        "true",
        style({
          height: "*",
          display: "inline-block",
          width: "100%"
        })
      ),
      state(
        "false",
        style({
          height: "0",
          display: "none",
          padding: "0"
        })
      ),
      transition("true => false", animate("0.3s 100ms ease-out")),
      transition("false => true", animate("0.3s ease-in"))
    ]),
    trigger("plusTrigger", [
      state(
        "true",
        style({
          "transform-origin": "10px 10px",
          transform: "rotate(90deg)"
        })
      ),
      state(
        "false",
        style({
          "transform-origin": "10px 10px",
          transform: "rotate(0deg)"
        })
      ),
      transition("true <=> false", animate("0.3s"))
    ]),
    trigger("fadeInTrigger", [
      state(
        "true",
        style({
          opacity: "1"
        })
      ),
      state(
        "false",
        style({
          opacity: "0"
        })
      ),
      transition("true => false", animate("0.2s ease")),
      transition("false => true", animate("0.3s 300ms ease"))
    ]),
    trigger("borderTrigger", [
      state('true', style({
        'border-left-color': '#ffffff'
      })),
      state('false', style({
        "border-left-color": "#0071bc"
      })),
      transition(
        "true <=> false",
        animate(
          "1s ease",
          keyframes([
            style({
              'border-left-color': "#ffffff",
              offset: 0
            }),
            style({
              "border-left-color": "#ffffff",
              offset: 0.5
            }),
            style({
              "border-left-color": "#0071bc",
              offset: 1.0
            })
          ])
        )
      )
    ])
  ]
};
