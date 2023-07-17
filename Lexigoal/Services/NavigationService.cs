using DesktopChatClone.Core;
using Lexigoal.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lexigoal.Services
{
	public class NavigationService : ObservableObject, INavigationService
    {
        public ViewModel _currentView;
        private readonly Func<Type, ViewModel> _viewModelFactory;

        public ViewModel CurrentView
        {
			get => _currentView;

            private set
            {
				_currentView = value;
                OnPropertyChanged();
            }
		}

		public NavigationService(Func<Type, ViewModel> viewModelFactory)
        {
            _viewModelFactory = viewModelFactory;
        }

        public void NavigateTo<TViewModel>() where TViewModel : ViewModel
        {
			ViewModel viewModel = _viewModelFactory.Invoke(typeof(TViewModel));
            CurrentView = viewModel;
		}
    }
}