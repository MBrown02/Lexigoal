using Lexigoal.Core;

namespace Lexigoal.Services
{
	public interface INavigationService
    {
        ViewModel CurrentView { get; }

        void NavigateTo<T>() where T : ViewModel;
    }
}
