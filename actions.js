module.exports = function (self) {
	self.setActionDefinitions({
		set_voice_id: {
			name: 'Set Voice',
			options: [
				{
					id: 'voiceId',
					type: 'dropdown',
					label: 'Voice',
					default: '',
					choices: self.vm.voices.map((item) => ({ id: item.id, label: item.name })),
				},
			],
			callback: async (event) => {
				const voiceId = event.options.voiceId
				self.vm.internal.setVoice(voiceId)
			},
		},
		set_beep_sound: {
			name: 'Set Beep Sound',
			options: [
				{
					id: 'beepEnabled',
					type: 'checkbox',
					label: 'Enabled',
					default: false,
				},
			],
			callback: async (event) => {
				self.vm.internal.setBeepSound(event.options.beepEnabled)
			},
		},
		toggle_voice_changer: {
			name: 'Toggle Voice Changer',
			options: [],
			callback: async (event) => {
				self.vm.internal.toggleVoiceChanger()
				self.checkFeedbacks('VoiceChangerState')
			},
		},
		play_meme: {
			name: 'Play Meme',
			options: [
				{
					id: 'memeId',
					type: 'dropdown',
					label: 'Meme',
					default: 0,
					choices: self.vm.soundboards.flat().map((item) => ({ id: item.id, label: item.name })),
				},
			],
			callback: async (event) => {
				// console.log('in callback!')
				const memeId = event.options.memeId
				self.vm.internal.playMeme(memeId)
			},
		},
		stop_all_sounds: {
			name: 'Stop all sounds',
			options: [],
			callback: async (event) => {
				self.vm.stopAllSounds()
			},
		},
		hear_self: {
			name: 'Toggle Hear Self',
			options: [],
			callback: async (event) => {
				self.vm.internal.toggleHearMyVoice()
			},
		},
		hear_background: {
			name: 'Toggle Hear Background',
			options: [],
			callback: async (event) => {
				self.vm.internal.toggleBackground()
			},
		},
		mute_mic: {
			name: 'Toggle Mute Mic',
			options: [],
			callback: async (event) => {
				self.vm.internal.toggleMuteMic()
			},
		},
		mute_memes_for_me: {
			name: 'Toggle Mute Soundboard for me',
			options: [],
			callback: async (event) => {
				self.vm.internal.toggleMuteMemeForMe()
			},
		},
	})
}
