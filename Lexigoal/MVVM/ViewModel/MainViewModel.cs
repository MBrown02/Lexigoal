using DesktopChatClone.Core;
using Lexigoal.Services;
using System.Collections.ObjectModel;

namespace Lexigoal.MVVM.ViewModel
{
	public class MainViewModel : Core.ViewModel
    {
		private INavigationService _navigation;

        public INavigationService Navigation
        {
            get => _navigation;
            set
            {
                _navigation = value;
                OnPropertyChanged();
            }
        }

        public RelayCommand NavigateToHomeCommand { get; set; }
        public RelayCommand NavigateToSettingsCommand { get; set; }

		public MainViewModel(INavigationService navService)
        {
            Navigation = navService;
			NavigateToHomeCommand = new RelayCommand(n => { Navigation.NavigateTo<HomeViewModel>(); }, n => true);
			NavigateToSettingsCommand = new RelayCommand(n => { Navigation.NavigateTo<SettingsViewModel>(); }, n => true); 
		}
    }
}