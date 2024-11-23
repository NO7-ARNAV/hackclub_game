const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{portalDark: 0},
	{ScrollTo: 0},
	{Platform: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{portaaal2: 0},
	{portaaal: 0},
	{portalDark2: 0},
	{portaaal3: 0},
	{death: 0},
	{TiledBackground2: 0},
	{Sprite: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{CurrentLevel: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	portalDark: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	portaaal2: class extends self.ISpriteInstance {},
	portaaal: class extends self.ISpriteInstance {},
	portalDark2: class extends self.ISpriteInstance {},
	portaaal3: class extends self.ISpriteInstance {},
	death: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {}
}