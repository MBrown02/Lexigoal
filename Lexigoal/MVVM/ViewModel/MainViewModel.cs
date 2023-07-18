using DesktopChatClone.Core;
using Lexigoal.Services;
using System.Collections.ObjectModel;

namespace Lexigoal.MVVM.ViewModel
{
	public class MainViewModel : Core.ViewModel
    {
		public RelayCommand HomeViewCommand { get; set; }
		public RelayCommand SettingsViewCommand { get; set; }


		public HomeViewModel HomeVM { get; set; }
        public SettingsViewModel SettingsVM { get; set; }

        private object _currentView;

        public object CurrentView 
        { 
            get { return _currentView; }    
            set 
            { 
                _currentView = value; OnPropertyChanged(); 
            } 
        }

        public MainViewModel() 
        {
            HomeVM = new HomeViewModel();
			SettingsVM = new SettingsViewModel();

			CurrentView = HomeVM;

            HomeViewCommand = new RelayCommand(n =>
            {
                CurrentView = HomeVM;
            });

			SettingsViewCommand = new RelayCommand(n =>
			{
				CurrentView = SettingsVM;
			});
		}
    }
}